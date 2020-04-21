export const height = t => {
    if(!t) return 0;

    return 1 + Math.max(height(t.left), height(t.right));
};

export const findMin = t => {
    if(!t) return;
    if(!t.left) return t.value;

    return findMin(t.left);
};

export const searchNode = (t, key) => {
    if(!t) return;

    switch(true) {
        case key < t.value: 
            return searchNode(t.left, key);
        case key > t.value: 
            return searchNode(t.right, key);
        default: 
            return t;
    }
};

export const sum = t => {
    if(!t) return 0;

    return t.value + sum(t.left) + sum(t.right);
};

export const insertNode = (t, node) => {
    if(!t) return;
    if(!node) return t;

    if(node.value < t.value) {
        if(!t.left) {
            t.left = node;
            return t;
        }
        else {
            return insertNode(t.left, node);
        }
    }
    else {
        if(!t.right) {
            t.right = node;
            return t;
        }
        else {
            return insertNode(t.right, node);
        }
    }
};