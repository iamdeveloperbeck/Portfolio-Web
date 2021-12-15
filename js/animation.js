let scroll = ScrollReveal ({
    origin: "top",
    distance: "-80px",
    duration: 2000,
    reset: false
});

scroll.reveal (
    `.navbar,
      .hero,
      .portfolio,
      .services,
      .languages,
      .contact,
      footer,
      .bottom-title`,{
        interval: 300,
    }
);

let sr2 = ScrollReveal ({
    origin: "right",
    distance: "50%",
    duration: 3000,
    reset: false
});

sr2.reveal (
    `#spring1,
      #spring2,
      #spring3`,
);

let sr3 = ScrollReveal ({
    origin: "left",
    distance: "50%",
    duration: 3000,
    reset: false
});

sr3.reveal (
    `#springL1,
      #springL2,
      #springL3`,
);