const skins = [
  {
    name: "Protocol 781-A",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F01%2F07%2FProtocol_Bundle_1920x1080.jpg&w=1920&q=75",
    edition: "Ultra",
    price: 9900,
  },
  {
    name: "Tigris",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F01%2F07%2Fvalorant-tigres-skin-bundle-lunar-new-year.jpeg&w=1920&q=75",
    edition: "Deluxe",
    price: 5100,
  },
  {
    name: "Undercity",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F02%2F03%2Fvalorant-undercity-skin-bundle.jpeg&w=1920&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Gaia's Vengeance",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F02%2F16%2Fvalorant-gaias-vengeance-skin-bundle.jpg&w=1920&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Team Ace",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F03%2F02%2Fvalorant-team-ace-skins.jpeg&w=1200&q=75",
    edition: "Deluxe",
    price: 5616,
  },
  {
    name: "Endeavour",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F06%2F17%2Fvalorant-endeavour-skin-bundle.jpg&w=1080&q=75",
    edition: "Select",
    price: 2930,
  },
  {
    name: "Doodle Buds",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F03%2F23%2Fvalorant-doodle-buds-skin-bundle.jpg&w=1080&q=75",
    edition: "Premium",
    price: 6992,
  },
  {
    name: "RGX 11z Pro 2",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F04%2F20%2FFRI8yEbXoAAvoxL.jpg&w=1920&q=75",
    edition: "Exclusive",
    price: 8700,
  },
  {
    name: "Titanmail",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F04%2F26%2FValorant-Titanmail-skin-bundle.jpeg&w=1200&q=75",
    edition: "Deluxe",
    price: 5100,
  },
  {
    name: "Neptune",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F05%2F12%2Fvalorant-neptune-skin-bundle.jpeg&w=1920&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Xenohunter",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F06%2F01%2Fvalorant-xenohunter-skin-bundle.jpeg&w=828&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Prelude to Chaos",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F06%2F15%2Fvalorant-prelude-to-chaos-skin-bundle-cost-price-weapons-release-date.jpg&w=1920&q=75",
    edition: "Exclusive",
    price: 8700,
  },
  {
    name: "Sarmad",
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/07/Valorant_Sarmad_Skin_Bundle-1024x576.jpg",
    edition: "Deluxe",
    price: 5100,
  },
  {
    name: "Reaver 2.0",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F07%2F06%2FReaver-Episode-5-Skin-Bundle-1024x576.jpg&w=1080&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Champions 2022",
    image:
      "https://www.theloadout.com/wp-content/sites/theloadout/2022/08/valorant-champions-2022-bundle.jpg",
    edition: "Exclusive",
    price: 6265,
  },
  {
    name: "Kohaku & Matsuba",
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/09/Valorant_Kohaku_Matsuba_Bundle-1024x576.webp",
    edition: "Deluxe",
    price: 5100,
  },
  {
    name: "ChronoVoid",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F09%2F19%2Fvalorant-chronovoid-skin-bundle-1024x576.jpg&w=1080&q=75",
    edition: "Exclusive",
    price: 8700,
  },
  {
    name: "Crimsonbeast",
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/10/Valorant_Crimsonbeast_Skin_Bundle-1024x576.webp",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Ion 2.0",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F09%2F20%2Fion-collection-2022-1024x576.jpg&w=1080&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Soulstrife",
    image:
      "https://www.dexerto.com/_next/image/?url=https%3A%2F%2Feditors.dexerto.com%2Fwp-content%2Fuploads%2F2022%2F10%2F19%2Fvalorant-soulstrife-skin-collection-1024x576.jpg&w=1080&q=75",
    edition: "Premium",
    price: 7100,
  },
  {
    name: "Abyssal",
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_AbyssalSkins-1024x576.jpg",
    edition: "Deluxe",
    price: 5100,
  },
  {
    name: "Cryostasis",
    image:
      "https://cdn.oneesports.gg/cdn-data/2022/12/Valorant_Cryostasis_Skin_Bundle.webp",
    edition: "Premium",
    price: 7100,
  },
];

export { skins };
