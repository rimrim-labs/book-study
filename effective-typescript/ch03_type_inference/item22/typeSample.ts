/**
 * 태그된 유니온
 */
interface UploadEvent {
    type: 'upload'
    uploadFileName: string
}

interface DownloadEvent {
    type :'download'
    downloadFileName: string
}

type AppEvent = UploadEvent | DownloadEvent

function handleEvent(e: AppEvent) {
    switch (e.type) {
        case "download":
            return e.downloadFileName
        case 'upload':
            return e.uploadFileName
    }
}

/**
 * 사용자 정의 타입 가드
 */
function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el
}

const element = document.getElementById('elem')

if (isInputElement(element!)) {
    console.log(element.value)
}

function isDefined<T>(x: T | undefined): x is T {
    return x !== undefined
}

const members= ['Hi', 'Hello', 'Good']
const search = ['Hi', 'Hello'].map(elem => members.find(n => n === elem))
    .filter(isDefined)