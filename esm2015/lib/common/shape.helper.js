/**
 * Generates a rounded rectanglar path
 *
 * @export
 * @param x, y, w, h, r, tl, tr, bl, br
 */
export function roundedRect(x, y, w, h, r, [tl, tr, bl, br]) {
    let retval = '';
    w = Math.floor(w);
    h = Math.floor(h);
    w = w === 0 ? 1 : w;
    h = h === 0 ? 1 : h;
    retval = `M${[x + r, y]}`;
    retval += `h${w - 2 * r}`;
    if (tr) {
        retval += `a${[r, r]} 0 0 1 ${[r, r]}`;
    }
    else {
        retval += `h${r}v${r}`;
    }
    retval += `v${h - 2 * r}`;
    if (br) {
        retval += `a${[r, r]} 0 0 1 ${[-r, r]}`;
    }
    else {
        retval += `v${r}h${-r}`;
    }
    retval += `h${2 * r - w}`;
    if (bl) {
        retval += `a${[r, r]} 0 0 1 ${[-r, -r]}`;
    }
    else {
        retval += `h${-r}v${-r}`;
    }
    retval += `v${2 * r - h}`;
    if (tl) {
        retval += `a${[r, r]} 0 0 1 ${[r, -r]}`;
    }
    else {
        retval += `v${-r}h${r}`;
    }
    retval += `z`;
    return retval;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcGUuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN3aW1sYW5lL25neC1jaGFydHMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL3NoYXBlLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBWTtJQUNwRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFaEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxQixNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRTFCLElBQUksRUFBRSxFQUFFO1FBQ04sTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN4QztTQUFNO1FBQ0wsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ3hCO0lBRUQsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUUxQixJQUFJLEVBQUUsRUFBRTtRQUNOLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN6QztTQUFNO1FBQ0wsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDekI7SUFFRCxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRTFCLElBQUksRUFBRSxFQUFFO1FBQ04sTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDMUM7U0FBTTtRQUNMLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDMUI7SUFFRCxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRTFCLElBQUksRUFBRSxFQUFFO1FBQ04sTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3pDO1NBQU07UUFDTCxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUN6QjtJQUVELE1BQU0sSUFBSSxHQUFHLENBQUM7SUFFZCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZXMgYSByb3VuZGVkIHJlY3RhbmdsYXIgcGF0aFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB4LCB5LCB3LCBoLCByLCB0bCwgdHIsIGJsLCBiclxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmRlZFJlY3QoeCwgeSwgdywgaCwgciwgW3RsLCB0ciwgYmwsIGJyXTogYm9vbGVhbltdKSB7XG4gIGxldCByZXR2YWwgPSAnJztcblxuICB3ID0gTWF0aC5mbG9vcih3KTtcbiAgaCA9IE1hdGguZmxvb3IoaCk7XG5cbiAgdyA9IHcgPT09IDAgPyAxIDogdztcbiAgaCA9IGggPT09IDAgPyAxIDogaDtcblxuICByZXR2YWwgPSBgTSR7W3ggKyByLCB5XX1gO1xuICByZXR2YWwgKz0gYGgke3cgLSAyICogcn1gO1xuXG4gIGlmICh0cikge1xuICAgIHJldHZhbCArPSBgYSR7W3IsIHJdfSAwIDAgMSAke1tyLCByXX1gO1xuICB9IGVsc2Uge1xuICAgIHJldHZhbCArPSBgaCR7cn12JHtyfWA7XG4gIH1cblxuICByZXR2YWwgKz0gYHYke2ggLSAyICogcn1gO1xuXG4gIGlmIChicikge1xuICAgIHJldHZhbCArPSBgYSR7W3IsIHJdfSAwIDAgMSAke1stciwgcl19YDtcbiAgfSBlbHNlIHtcbiAgICByZXR2YWwgKz0gYHYke3J9aCR7LXJ9YDtcbiAgfVxuXG4gIHJldHZhbCArPSBgaCR7MiAqIHIgLSB3fWA7XG5cbiAgaWYgKGJsKSB7XG4gICAgcmV0dmFsICs9IGBhJHtbciwgcl19IDAgMCAxICR7Wy1yLCAtcl19YDtcbiAgfSBlbHNlIHtcbiAgICByZXR2YWwgKz0gYGgkey1yfXYkey1yfWA7XG4gIH1cblxuICByZXR2YWwgKz0gYHYkezIgKiByIC0gaH1gO1xuXG4gIGlmICh0bCkge1xuICAgIHJldHZhbCArPSBgYSR7W3IsIHJdfSAwIDAgMSAke1tyLCAtcl19YDtcbiAgfSBlbHNlIHtcbiAgICByZXR2YWwgKz0gYHYkey1yfWgke3J9YDtcbiAgfVxuXG4gIHJldHZhbCArPSBgemA7XG5cbiAgcmV0dXJuIHJldHZhbDtcbn1cbiJdfQ==