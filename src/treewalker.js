class MyTreeWalker {
  constructor(ast) {
    this.currentNode = ast;
    this.parentMap = new Map();
    this.seenMap = new Map();
    this.setupMap(this.currentNode);
  }

  deleteProperty(property) {
    console.log(`Deleting property ${property}`);
    delete this.currentNode[property];
  }

  replaceCurrentNodeWith(obj) {
    this.currentNode = obj;
  }

  isAtLeaf() {
    const node = this.currentNode;
    const keys = Object.keys(node);
    for (const key of keys) {
      const child = node[key];
      if (Array.isArray(child) || this.isNode(child)) {
        return false;
      }
    }
    return true;
  }

  defaultWalk() {
    console.log("Calling default walk");
    if (!this.goDown()) {
      this.goUp();
    }
  }

  isAllNodesVisited() {
    if (this.isAtRoot()) {
      // Check that all children have been visited
      const children = this.getChildren();
      for (const child of children) {
        if (!this.seenMap.get(child)) {
          console.log("There are nodes that have not been visited");
          return false;
        }
      }
      console.log("All nodes visited");
      return true;
    }
  }

  isAtRoot() {
    if (
      !this.parentMap.has(this.currentNode) &&
      this.seenMap.get(this.currentNode)
    ) {
      console.log("Is at root");
      return true;
    }
    return false;
  }

  getChildren() {
    if (this.isAtLeaf()) {
      return [];
    }
    const node = this.currentNode;
    const keys = Object.keys(node);
    let arr = [];
    for (const key of keys) {
      const property = node[key];
      if (Array.isArray(property)) {
        return property;
      } else if (this.isNode(property)) {
        arr = [...arr, property];
      }
    }
    return arr;
  }

  goDown() {
    if (this.isAtLeaf()) {
      console.log("Can't go down. Currently at a leaf.");
      return false;
    }
    this.seenMap.set(this.currentNode, true);

    const children = this.getChildren();
    for (const child of children) {
      if (this.seenMap.get(child)) {
        continue;
      } else {
        // Found child that has not been visited
        this.currentNode = child;
        this.seenMap.set(child, true);
        console.log("Went DOWN");
        console.log("Current node:", this.currentNode);
        return true;
      }
    }
    console.log("All children of this node have been visited");
    return false;
  }

  goUp() {
    if (this.canGoUp()) {
      this.seenMap.set(this.currentNode, true);
      this.currentNode = this.parentMap.get(this.currentNode);
      this.seenMap.set(this.currentNode, true);
      console.log(`Went UP`);
      console.log("Current node:", this.currentNode);
      return true;
    }
    return false;
  }

  // Iterate through ast to initialize seenMap and parentMap
  setupMap(node) {
    this.seenMap.set(node, false);
    const keys = Object.keys(node);
    for (const key of keys) {
      const child = node[key];
      if (Array.isArray(child)) {
        for (const ch of child) {
          this.parentMap.set(ch, node);
          this.setupMap(ch);
        }
      } else if (this.isNode(child)) {
        this.parentMap.set(child, node);
        this.setupMap(child);
      }
    }
  }

  canGoUp() {
    return !this.isAtRoot();
  }

  getNode() {
    return this.currentNode;
  }

  isNode(node) {
    return typeof node === "object";
  }

  getType() {
    return this.currentNode.type === type;
  }

  hasProperty(property) {
    return property in this.currentNode;
  }

  hasType(type) {
    return this.currentNode.type === type;
  }
}
