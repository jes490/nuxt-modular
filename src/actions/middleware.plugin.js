import middleware from './middleware';

const filenames = '<%= options.files %>'.split(',');

for (const filename of filenames) {
    const name = filename.replace(/^\.\//u, '').replace(/\.(<%= extensions %>)$/u, '');

    middleware['<%= options.namespace ? options.namespace + "/" : "" %>' + name] = require('@/<%= options.dir %>/' + filename);
}
