export function promisify(func){

    return function(){
        var args=Array.prototype.slice.call(arguments);
        return new Promise(function (resolve, reject) {

        var callback=function(e,data){
            if (e) {
                reject(e);
            }
            else {
                resolve(data);
            }
        }
        args.push(callback);
        func.apply(null,args);
    });
    }
}