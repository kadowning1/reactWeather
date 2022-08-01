export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID as string, {
    path_url: url,
  });
};

export const form_event = (eventName: string, userData: string) => {
  window.gtag('event', eventName, {
    user_data: userData,
  });
}

export const event_click = (
  category: string,
  action?: string,
  label?: string,
  search_term?: string,
) => {
  window.gtag('event', 'event_click', {
    event_category: category,
    event_action: action,
    event_label: label,
    search_term: search_term,
  });
};

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};
