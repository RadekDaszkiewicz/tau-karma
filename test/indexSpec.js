describe("checkFields", function () {
    jasmine.clock().install();

    beforeEach(function () {
        let s = spyOn(console, 'log').and.callThrough();
        $('body').append(`
        <div class="tv filled">A</div>
        <div class="tv empty"></div>
        <div class="tv filled">C</div>
        <div class="tv empty"></div>
        `);
    });

    afterEach(function () {
        $('.tv').remove();
    });

    it("shuld validate text", function () {
        $('.tv').checkFields();
        expect(!$('.filled').classList).toContain('invalid');
        expect($('.empty').classList).toContain('invalid');
    });

});
