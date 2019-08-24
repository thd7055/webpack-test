// *** 중요해 ***** es6모듈 ******
// named exports : 여러개 사용 가능
// exports : 배포하기 위해 사용
export var area = function(r) {
    return Math.PI * r * r;
};

export var circumference = function (r) {
    return 2 * Math.PI * r;
};