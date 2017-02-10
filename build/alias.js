const path = require('path');
const join = src => path.join(__dirname, src);

module.exports = {
    components: join('../src/components'),
    vuexdir: join('../src/vuex'),
    utils: join('../src/utils'),
    filters: join('../src/filters'),
    images: join('../src/images'),
    scripts: join('../src/scripts'),
    mixins: join('../src/mixins'),
    styles: join('../src/styles'),
    config: join('../src/config.js')
}
