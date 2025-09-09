export const domainFromUrl = (url) => {
    try {
        return new URL(url).hostname.replace(/^www\./, "")
    } catch {
        return ''
    }
}
export const formatData = (iso) => {
    try {
        const dateObj = new Date(iso); // d ist ein JavaScript Date Objekt.
        if(isNaN(dateObj.getTime())) return '';

        // z. B. auf Deutsch „27. Aug. 2025, 04:07“ oder auf Englisch „Aug 27, 2025, 4:07 AM“
        return dateObj.toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });
    } catch {
        return ''
    }
}
export function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + "K";
    }
    return num.toString();
  }