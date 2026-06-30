#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Serve the local HTML workbench."""

import argparse
import functools
import http.server
import socketserver

from common import ROOT


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", default=4318, type=int)
    args = parser.parse_args()

    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
    with socketserver.ThreadingTCPServer((args.host, args.port), handler) as httpd:
        print("[serve] http://%s:%d/" % (args.host, args.port))
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[serve] stopped")


if __name__ == "__main__":
    main()
