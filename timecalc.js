function parseTime (tstr) {
    var ms = 0;
    tstr.split(":").forEach(function (nstr, idx, arr) {
        var mult = Math.pow(60, arr.length - (idx + 1)) * 1000;
        ms += parseFloat(nstr, 10) * mult; })
    return ms;
}


function writeTime (ms) {
    var date = new Date(ms);
    var str = "";
    var dcs = {h:date.getUTCHours(), m:date.getUTCMinutes(), 
               s:date.getUTCSeconds()};
    Object.keys(dcs).forEach(function (key, idx, arr) {
        if(str || dcs[key]) {
            if(dcs[key] < 10) {
                str += "0"; }
            str += dcs[key]
            if(idx < arr.length - 1) {
                str += ":"; } } });
    dcs.ms = date.getUTCMilliseconds();
    if(dcs.ms) {
        str = str || "0";
        str += "." + dcs.ms; }
    return str;
}
            

function timecalc () {
    if(process.argv.length !== 5) {
        return console.log("usage: A +/- B.  time format hh:mm:ss.ttt"); }
    tA = parseTime(process.argv[2]);
    tB = parseTime(process.argv[4]);
    if(process.argv[3] === "-") {
        tB *= -1; }
    console.log(writeTime(tA + tB));
}


timecalc();
