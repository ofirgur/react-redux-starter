/**
# Binary Search

In computer science, binary search, also known as half-interval 
search, logarithmic search, or binary chop, is a search algorithm 
that finds the position of a target value within a sorted 
array. Binary search compares the target value to the middle 
element of the array; if they are unequal, the half in which 
the target cannot lie is eliminated and the search continues 
on the remaining half until it is successful. If the search 
ends with the remaining half being empty, the target is not 
in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## Complexity

**Time Complexity**: `O(log(n))` - since we split search area by two for every
next iteration.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
*/

export const binarySearch = (sortedArray, seekElement) => {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while(startIndex <= endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        let midElement = array[midIndex];

        switch(true) {
            case seekElement < midElement:
                endIndex = midIndex - 1;
                break;
            case seekElement > midElement:
                startIndex = midIndex + 1;
                break;
            default: 
                return midIndex;
        }
    }

    return -1;
};

/**
# Merge Sort

In computer science, merge sort (also commonly spelled 
mergesort) is an efficient, general-purpose, 
comparison-based sorting algorithm. Most implementations 
produce a stable sort, which means that the implementation 
preserves the input order of equal elements in the sorted 
output. Mergesort is a divide and conquer algorithm that 
was invented by John von Neumann in 1945.

An example of merge sort. First divide the list into 
the smallest unit (1 element), then compare each 
element with the adjacent list to sort and merge the 
two adjacent lists. Finally all the elements are sorted 
and merged.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

A recursive merge sort algorithm used to sort an array of 7 
integer values. These are the steps a human would take to 
emulate merge sort (top-down).

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
*/

// Split the array into halves and merge them recursively 
export const mergeSort = arr => {
    // return once we hit an array with a single item
    if (arr.length === 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
    const left = arr.slice(0, middle); // items on the left side
    const right = arr.slice(middle); // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
};
  
  // compare the arrays item by item and return the concatenated result
const merge = (left, right) => {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};


