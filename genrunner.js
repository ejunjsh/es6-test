export function runGen (func) {

    var gen = func();

    var next = function (data) {

        let result = gen.next(data);
        if (result.value) {
            result.value.then(function (data) {
                next(data);
            }).catch(function (e) {
                gen.throw(e);
            });

        }
        else {
            if (!result.done) {
                next();
            }
        }
    }

    next();

}