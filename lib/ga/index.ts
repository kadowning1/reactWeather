export const pageview = (url: any) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
      path_url: url,
  })
}

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag('event', action, {
      event_category,
      event_label,
      value
  });
};