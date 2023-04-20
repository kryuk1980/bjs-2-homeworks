//Задача № 1
function cachingDecoratorNew(func) {

    let cache = [];

    function wrapper(...args) {

        let wrapHash = md5(args);
        let objectInCache = cache.findIndex((item, index, arr) => arr[index].hash === wrapHash);

        if (objectInCache > -1) {
            return 'Из кэша: ' + cache[objectInCache].value;
        }

        let resultFunc = func(...args);
        let newItem = {
            hash: wrapHash,
            value: resultFunc
        }

        cache.push(newItem);

        if (cache.length > 5) {
            cache.shift();
        }

        return 'Вычисляем: ' + resultFunc;

    }

    return wrapper;

}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }
        timeoutId = setTimeout(() => {
            timeoutId = true;
            func(...args);
            wrapper.count++;
        }, delay)
        wrapper.allCount++;
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;

}
