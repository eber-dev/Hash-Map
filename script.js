class HashMap {
    constructor() {
        this.loadfactor = 0.75;
        this.buckets = new Array(16);
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
        const hashCode = this.hash(key);
        const indice = hashCode % this.buckets.length;

        if (!this.buckets[indice]) {
            this.buckets[indice] = [];
        }

        for (let i = 0; i < this.buckets[indice].length; i++) {
            if (this.buckets[indice][i].key === key) {
                this.buckets[indice][i].value = value;
                return;
            }
        }

        this.buckets[indice].push({ key, value });
    }

    get(key) {
        const hashCode = this.hash(key);
        return hashCode % this.buckets.length;
    }

    has(key) {
        const hashCode = this.hash(key);
        const indice = hashCode % this.buckets.length;

        for (let i = 0; i < this.buckets[indice].length; i++) {
            if (this.buckets[indice][i] === key) {
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

        for (let i = 0; i < bucket; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    length() {
        let contador = 0;

        if (!this.buckets) {
            return 0;
        }

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                contador += this.buckets[i].length;
            }
        }

        return contador;
    }

    clear() {
        this.buckets = new Array(16);
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
