const filenames = '<%= options.files %>'.split(',');

export default ({ store }) => {
    for (const filename of filenames) {
        let name = filename.replace(/^\.\//u, '').replace(/\.(<%= extensions %>)$/u, '');

        if (name === 'index') {
            name = '';
        }

        store.registerModule('<%= options.namespace %>' + (name ? `/${name}` : ''), require('@/<%= options.dir %>/' + filename));
    }
};
