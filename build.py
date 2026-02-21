# =============================================================================
# X-Maxx RC Car Blog — Build Script
# JSON 데이터 → HTML 모델 페이지 자동 생성
# 실행: python build.py
# =============================================================================
#
# CHANGELOG
# ---------
# 2026-02-18  초기 생성 — traxxas-models.html, fms-models.html 빌드
#
# OUTPUT
# ------
# traxxas-models.html  ← data/traxxas.json + templates/traxxas-models.html
# fms-models.html      ← data/fms.json + templates/fms-models.html
# =============================================================================

import json
import os
import sys
from jinja2 import Environment, FileSystemLoader

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')

# Pages to build: (template_file, data_file, output_file, active_page)
PAGES = [
    ('traxxas-models.html', 'traxxas.json', 'traxxas-models.html', 'traxxas-models'),
    ('fms-models.html', 'fms.json', 'fms-models.html', 'fms-models'),
]


def load_json(filepath):
    """Load and parse a JSON data file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)


def build_page(env, template_name, data, output_path, active_page):
    """Render a single page from template + data."""
    template = env.get_template(template_name)
    html = template.render(d=data, active_page=active_page)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    return output_path


def main():
    # Set up Jinja2
    env = Environment(
        loader=FileSystemLoader(TEMPLATES_DIR),
        autoescape=False,  # HTML is pre-escaped in data or intentional
        keep_trailing_newline=True,
        trim_blocks=True,
        lstrip_blocks=False,
    )

    built = []
    errors = []

    for template_file, data_file, output_file, active_page in PAGES:
        data_path = os.path.join(DATA_DIR, data_file)
        output_path = os.path.join(BASE_DIR, output_file)

        # Check data file exists
        if not os.path.exists(data_path):
            errors.append(f'  [SKIP] {data_file} not found')
            continue

        try:
            data = load_json(data_path)
            result = build_page(env, template_file, data, output_path, active_page)
            built.append(f'  [OK] {output_file}')
        except Exception as e:
            errors.append(f'  [ERROR] {output_file}: {e}')

    # Report
    print('=' * 50)
    print('  X-Maxx RC Blog — Build Complete')
    print('=' * 50)

    if built:
        print('\nGenerated:')
        for msg in built:
            print(msg)

    if errors:
        print('\nIssues:')
        for msg in errors:
            print(msg)

    if not built and not errors:
        print('\n  No pages to build.')

    print()
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
