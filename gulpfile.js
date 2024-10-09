const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Task de otimização de imagens
function images() {
    return gulp.src('./src/images/**/*')  // Origem dos arquivos de imagem
        .pipe(imagemin())  // Otimização de imagens
        .pipe(gulp.dest('./dist/images'));  // Destino das imagens otimizadas
}

// Task de compilação do Sass
function styles() {
    return gulp.src('./src/styles/**/*.scss')  // Origem dos arquivos SCSS
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))  // Compilando e tratando erros
        .pipe(gulp.dest('./dist/css'));  // Destino dos arquivos CSS compilados
}

// Task de watch para observar mudanças nos arquivos SCSS
function watch() {
    gulp.watch('./src/styles/**/*.scss', styles);  // Observa mudanças nos arquivos e recompila
}

// Definir as tasks como padrão
exports.default = gulp.parallel(styles, images);

exports.styles = styles;
exports.images = images;
exports.watch = watch;
