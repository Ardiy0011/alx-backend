#!/usr/bin/env python3
"""
A flask instsance with index.html route rendered
"""
from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/', strict_slashes=False)
def index():
    """
    Renders a index.html template
    """
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run()
