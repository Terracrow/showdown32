// info files (RAM/ SPACE/ PROCESSING/ VERSION...)

class Data {
    static version() {
        return require('../../package.json').version;
    }

    static ramtotal() {
        return process.memoryUsage().heapUsed.toFixed(2);
    }

    static ramused() {
        return process.memoryUsage().heapTotal.toFixed(2);
    }

    static cpu() {
        return process.cpuUsage().user;
    }
}

module.exports = () => {
    // ================== LOG ========================
    console.log(`VERSION -- ${Data.version()}`);
    console.log(`RAM USAGE -- ${Data.ramused()} / ${Data.ramtotal()}`);
    console.log(`CPU -- ${Data.cpu()}%`);
}