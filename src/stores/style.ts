import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Style } from '@/types'

export const useStyleStore = defineStore('style', () => {
    const defaultStyle: Style = {
        backgroundColor: "#ecf0f1",
        primaryColor: "#ff0080",
        textColor: "#151d26",
        textSize: '16',
    }

    const style = ref<Style>(defaultStyle)

    const saveStyleToLocalStorage = () => {
        localStorage.setItem('style', JSON.stringify(style.value))

        applyStyleToPage()
    }

    const getStyleFromLocalStorage = () => {
        const styleFromLocalStorage = localStorage.getItem('style')

        if (styleFromLocalStorage) {
            style.value = JSON.parse(styleFromLocalStorage)

            applyStyleToPage()
        }
    }

    const applyStyleToPage = () => {
        let root = document.documentElement;

        root.style.setProperty('--background-color', style.value.backgroundColor);
        root.style.setProperty('--primary-color', style.value.primaryColor);
        root.style.setProperty('--text-color', style.value.textColor);
        root.style.setProperty('--text-size', `${style.value.textSize}px`);
    }

    const resetStyle = () => {
        style.value = {
            backgroundColor: defaultStyle.backgroundColor,
            primaryColor: defaultStyle.primaryColor,
            textColor: defaultStyle.textColor,
            textSize: defaultStyle.textSize,
        }
        localStorage.removeItem('style')

        applyStyleToPage()
    }

    return {
        defaultStyle,
        style,
        saveStyleToLocalStorage,
        getStyleFromLocalStorage,
        applyStyleToPage,
        resetStyle
    }
})
