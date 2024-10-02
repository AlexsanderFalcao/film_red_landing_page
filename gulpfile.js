const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Task de compilação do Sass
function styles() {
    return gulp.src('./src/styles/*.scss')  // Origem dos arquivos SCSS
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))  // Compilando e tratando erros
        .pipe(gulp.dest('./dist/css'));  // Destino dos arquivos CSS compilados
}

// Task de watch para observar mudanças nos arquivos SCSS
function watch() {
    gulp.watch('./src/styles/*.scss', styles);  // Observa mudanças nos arquivos e recompila
}

// Definir as tasks como padrão
exports.styles = styles;
exports.watch = watch;
