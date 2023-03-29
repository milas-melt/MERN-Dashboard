// color design tokens export

/*
MMC website colour extractor
extractor: https://www.colorcombos.com/combotester.html?rnd=0&color0=2a032f&color1=2f2000&color2=2f7428&color3=200626&color4=f5333f&color5=4d5cf2&color6=333333&color7=2f4386&color8=e3fc52&color9=280028&color10=dcff00&color11=ebe4d2&color12=148261&color13=6200ee&color14=f5f5f5&color15=b00020&color16=fafafa&color17=d2d6dc&color18=a0aec0&color19=4a5764&color20=c1c9d1&color21=ed5479&color22=eae4d4&color23=f7f4ee&color24=e7ecf0&color25=fdf2f2&color26=9b1c1c&color27=f3faf7&color28=03543f&color29=877aff&color30=ed513d&color31=67a6ac&color32=253246&color33=1a213a&color34=00449e&color35=e6e6e6&color36=9fa6b2&color37=a4cafe&color38=3f83f8&color39=f9fafb&color40=252f3f&color41=6875f5&color42=5850ec&color43=5145cd&color44=f4f5f7&color45=8da2fb&color46=f8b4b4&color47=6b7280&color48=e5e7eb&color49=374151&color50=161e2e&color51=f05252&color52=e02424&color53=771d1d&color54=cddbfe

INDIGOSs:
    #2a032f
    #200626
    #4d5cf2
    #280028
    #6200ee

GREENs/YELLOWs:
    #2f2000
    #2f7428
    #e3fc52
    #dcff00
    #148261

REDs/PINKs:
    #f5333f
    #b00020

BLUEs:
    #333333
    #2f4386

GREY/WHITEs
    #ebe4d2
    #f5f5f5
    #fafafa
    #d2d6dc

... for more info, check the link above
Note that most of the colors have been generated automatically. With more time,
I'd make sure to respect the graphic charter and go through all the 55 colors
detected.

*/

export const tokensDark = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    // primary: {
    //     // blue
    //     100: "#d3d4de",
    //     200: "#a6a9be",
    //     300: "#7a7f9d",
    //     400: "#4d547d",
    //     500: "#21295c",
    //     600: "#191F45", // manually adjusted
    //     700: "#141937",
    //     800: "#0d1025",
    //     900: "#070812",
    // },

    primary: {
        // indigo
        100: "#dbdefc",
        200: "#b8befa",
        300: "#949df7",
        400: "#717df5",
        500: "#4d5cf2",
        600: "#2a032f", // manually adjusted
        700: "#2e3791",
        800: "#1f2561",
        900: "#0f1230",
    },
    // secondary: {
    //     // yellow
    //     50: "#f0f0f0", // manually adjusted
    //     100: "#fff6e0",
    //     200: "#ffedc2",
    //     300: "#ffe3a3",
    //     400: "#ffda85",
    //     500: "#ffd166",
    //     600: "#cca752",
    //     700: "#997d3d",
    //     800: "#665429",
    //     900: "#332a14",
    // },

    secondary: {
        100: "#f0f0f0",
        200: "#f4feba",
        300: "#eefd97",
        400: "#e9fd75",
        500: "#e3fc52",
        600: "#b6ca42",
        700: "#889731",
        800: "#5b6521",
        900: "#2d3210",
    },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          ...tokensDark.primary,
                          main: tokensDark.primary[400],
                          light: tokensDark.primary[400],
                      },
                      secondary: {
                          ...tokensDark.secondary,
                          main: tokensDark.secondary[300],
                      },
                      neutral: {
                          ...tokensDark.grey,
                          main: tokensDark.grey[500],
                      },
                      background: {
                          default: tokensDark.primary[600],
                          alt: tokensDark.primary[500],
                      },
                  }
                : {
                      // palette values for light mode
                      primary: {
                          ...tokensLight.primary,
                          main: tokensDark.grey[50],
                          light: tokensDark.grey[100],
                      },
                      secondary: {
                          ...tokensLight.secondary,
                          main: tokensDark.secondary[600],
                          light: tokensDark.secondary[700],
                      },
                      neutral: {
                          ...tokensLight.grey,
                          main: tokensDark.grey[500],
                      },
                      background: {
                          default: tokensDark.grey[0],
                          alt: tokensDark.grey[50],
                      },
                  }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
