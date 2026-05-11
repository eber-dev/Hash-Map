export class HashMap {
    constructor() {
        this.loadfactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = hashCode * primeNumber + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        if (this.size / this.capacity >= this.loadfactor) {
            this.resize();
        }

        const index = this.hash(key) % this.capacity;

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i].key === key) {
                this.buckets[index][i].value = value;
                return;
            }
        }

        this.buckets[index].push({ key, value });
        this.size++;
    }

    resize() {
        const oldBuckets = this.buckets;

        this.capacity *= 2;

        this.buckets = new Array(this.capacity);

        this.size = 0;

        for (let i = 0; i < oldBuckets.length; i++) {
            if (oldBuckets[i]) {
                for (let j = 0; j < oldBuckets[i].length; j++) {
                    const { key, value } = oldBuckets[i][j];
                    this.set(key, value);
                }
            }
        }
    }

    get(key) {
        const hashCode = this.hash(key);
        const indice = hashCode % this.buckets.length;

        const bucket = this.buckets[indice];

        if (!bucket) return null;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }

        return null;
    }

    has(key) {
        const hashCode = this.hash(key);
        const indice = hashCode % this.buckets.length;

        const bucket = this.buckets[indice];

        if (!bucket) return false;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return true;
            }
        }

        return false;
    }

    remove(key) {
        const hashCode = this.hash(key);
        const indice = hashCode % this.buckets.length;

        const bucket = this.buckets[indice];

        if (!bucket) {
            return false;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(16);
        this.capacity = 16;
        this.size = 0;
    }

    keys() {
        let array = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    array.push(this.buckets[i][j].key);
                }
            }
        }

        return array;
    }

    values() {
        let array = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    array.push(this.buckets[i][j].value);
                }
            }
        }

        return array;
    }

    entries() {
        let arrayelementos = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (let j = 0; j < this.buckets[i].length; j++) {
                    arrayelementos.push([
                        this.buckets[i][j].key,
                        this.buckets[i][j].value,
                    ]);
                }
            }
        }
        return arrayelementos;
    }
}
