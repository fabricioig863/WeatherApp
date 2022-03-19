export function condition(condition) {
    switch (condition) {
      case "storm":
        return (icon = {
          name: "rainy-outline",
          color: "#00008b",
        });
        break;
      case "snow":
        return (icon = {
          name: "snow-outline",
          color: "#00008b",
        });
        break;
      case "rain":
        return (icon = {
          name: "rainy-outline",
          color: "#00008b",
        });
        break;
      case "clear_day":
        return (icon = {
          name: "sunny-outline",
          color: "#d1ab48",
        });
        break;
      case "clear_nigth":
        return (icon = {
          name: "moon-outline",
          color: "#00008b ",
        });
        break;
  
      case "cloud":
        return (icon = {
          name: "cloudy-outline",
          color: "#00008b",
        });
        break;
      case "cloudly_day":
        return (icon = {
          name: "partly-sunny-outline",
          color: "#d1ab48",
        });
        break;
      case "cloudly_night":
        return (icon = {
          name: "cloudy-night-outline",
          color: "#00008b",
        });
        break;
      default:
        return (icon = {
          name: "cloud-outline",
          color: "#00008b",
        });
    }
  }
  