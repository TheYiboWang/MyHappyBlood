// mylearningWarning.js

Template.mylearningWarning.rendered = function() {
$('input').change(function() {
    var v = $(this).val();
    $('[class="tab-content container"]').css('font-size', v + 'px');
});
}

