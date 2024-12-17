/*
Copyright 2021-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import React, { CSSProperties } from "react";

interface IProps {
    backgroundImage?: string;
    blurMultiplier?: number;
}

export const BackdropPanel: React.FC<IProps> = ({ backgroundImage, blurMultiplier }) => {
    if (!backgroundImage) return null;

    const styles: CSSProperties = {};
    if (blurMultiplier) {
        const rootStyle = getComputedStyle(document.documentElement);
        const blurValue = rootStyle.getPropertyValue("--lp-background-blur");
        const pixelsValue = blurValue.replace("px", "");
        const parsed = parseInt(pixelsValue, 10);
        if (!isNaN(parsed)) {
            styles.filter = `blur(${parsed * blurMultiplier}px)`;
        }
    }
    return (
        <div className="mx_BackdropPanel">
            <img role="presentation" alt="" style={styles} className="mx_BackdropPanel--image" src="https://peachtart2.s3.amazonaws.com/tart/6847a4f1-a41f-4d16-8bdb-f89a45f6685e.png" />
        </div>
    );
};
