#!/usr/bin/env python3
"""
function that returns a tuple of start index and an end indexes
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculates start index and an end indexes of the current page.
    """
    Start = page_size
    end = page * page_size
    return end - Start, end
