#!/bin/bash
set -eu

bun run build
cp _redirects public/
