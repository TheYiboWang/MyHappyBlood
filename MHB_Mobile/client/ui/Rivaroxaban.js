// Rivaroxaban.js

Template.Rivaroxaban.rendered = function() {
$('input').change(function() {
    var v = $(this).val();
    $('[class="container"]').css('font-size', v + 'px');
});
}
