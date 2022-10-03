/*
 * Configuration for generating the identity values of a token.
 * @example: Defaults
 * ```
 * {
 *   $category: {
 *     $type: {
 *
 *       // The token name's prefix. Defaults to the value of the `type` attribute.
 *       prefix: {string},
 *
 *       // Which CTI (category, type, item) attribute to start at when stringing together the name.
 *       // Options are 'category', 'type', or 'item'.
 *       // Defaults to 'item'.
 *       nameStart: {string},
 *
 *       // Which types of identifiers are exported.
 *       // Currently, `vars` is the only property and defaults to the props/values below.
 *       exports: {
 *         vars: {
 *           css: {boolean}, // true
 *           scss: {boolean}, // true
 *           '@custom-media': {boolean}, // false
 *         },
 *       },
 *      }
 *    }
 *  }
 * ```
 */
module.exports = {
    asset: {
        icon: {
            prefix: 'icon',
            nameStart: 'item',
            exports: {
                vars: false,
            },
        },
        logo: {
            prefix: 'logo',
            nameStart: 'item',
            exports: {
                vars: false,
            },
        },
    },
    color: {
        default: {
            prefix: 'color',
            nameStart: 'type',
        },
    },
    breakpoint: {
        default: {
            prefix: 'breakpoint',
            nameStart: 'item',
        },
    },
    spacing: {
        default: {
            prefix: 'spacing',
            nameStart: 'item',
        },
    },
    opacity: {
        default: {
            prefix: 'opacity',
            nameStart: 'item',
        },
    },
    effect: {
        'box-shadow': {
            prefix: 'shadow',
        },
    },
    font: {
        face: {
            prefix: 'font',
            exports: {
                vars: true,
            },
        },
        family: {
            prefix: 'font-family',
            default: {
                nameStart: 'item',
            },
        },
        weight: {
            prefix: 'font-weight',
            default: {
                nameStart: 'item',
            },
        },
        size: {
            prefix: 'font-size',
            default: {
                nameStart: 'item',
            },
        },
        textCase: {
            prefix: 'font-text-case',
            default: {
                nameStart: 'item',
            },
        },
        textDecoration: {
            prefix: 'font-text-decoration',
            default: {
                nameStart: 'item',
            },
        },
        letterSpacing: {
            prefix: 'font-letter-spacing',
            default: {
                nameStart: 'item',
            },
        },
        paragraphSpacing: {
            prefix: 'font-paragraph-spacing',
            default: {
                nameStart: 'item',
            },
        },
        lineHeights: {
            prefix: 'font-line-heights',
            default: {
                nameStart: 'item',
            },
        },
        track: {
            prefix: 'font',
            nameStart: 'type',
        },
    },

    heading: {
        H1: {
            prefix: 'heading-h1',
            default: {
                nameStart: 'item',
            },
            fontFamiliy: {
                prefix: 'font-family',
                default: {
                    nameStart: 'item',
                },
            },
        },
    },
    size: {
        font: {
            prefix: 'text',
        },
    },
    utility: {
        typography: {
            exports: {
                vars: false,
            },
        },
    },
    viewport: {
        default: {
            prefix: 'viewport',
            nameStart: 'type',
            exports: {
                vars: {
                    js: true,
                    '@custom-media': true,
                },
            },
        },
    },
};
