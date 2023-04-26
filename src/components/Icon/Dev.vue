<template>
  <!-- JavaScript -->
  <svg
    v-if="isSame('JavaScript')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#EFD81D"
  >
    <path
      d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"
    />
  </svg>

  <!-- TypeScript -->
  <svg
    v-else-if="isSame('TypeScript')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0V0z" fill="#fff" />
    <path
      d="M0 12v12h24V0H0v12zm19.34-.956c.61.152 1.075.423 1.502.865.221.236.549.667.575.77.008.03-1.036.73-1.669 1.123-.022.015-.114-.083-.217-.236-.309-.45-.632-.644-1.128-.678-.727-.05-1.2.332-1.192.967a.88.88 0 00.103.45c.16.332.457.53 1.39.934 1.718.739 2.453 1.226 2.91 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.171-1.878-.647-2.442-1.272-.221-.244-.651-.88-.625-.926.011-.015.11-.076.221-.141l.892-.514.69-.4.145.213c.201.31.643.732.91.873.766.404 1.817.346 2.335-.118.221-.202.312-.412.312-.72 0-.279-.033-.4-.178-.61-.187-.266-.568-.49-1.65-.96-1.239-.533-1.772-.864-2.26-1.39a3.167 3.167 0 01-.659-1.2c-.091-.34-.114-1.189-.042-1.531.255-1.2 1.158-2.031 2.462-2.279.422-.08 1.406-.05 1.82.054v-.002zm-5.633 1.001l.007.983H10.59v8.876H8.381v-8.876H5.257v-.964l.027-.99c.01-.015 1.912-.022 4.217-.019l4.194.012.012.978z"
      fill="#007ACC"
    />
  </svg>

  <!-- Vue.js -->
  <svg
    v-else-if="isSame('Vue.js')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"
      fill="#35495E"
    />
    <path
      d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"
      fill="#41B883"
    />
  </svg>

  <!-- Nuxt.js -->
  <svg
    v-else-if="isSame('Nuxt.js')"
    viewBox="0 0 124 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M55.75 27.155c-3.222-5.54-11.278-5.54-14.5 0L6.134 87.535C2.912 93.075 6.94 100 13.384 100h27.413c-2.753-2.407-3.773-6.57-1.69-10.142L65.704 44.27 55.75 27.155z"
      fill="#80EEC0"
    />
    <path
      d="M78 40.4c2.667-4.533 9.333-4.533 12 0L119.06 89.8c2.667 4.533-.666 10.199-5.999 10.199H54.938c-5.333 0-8.666-5.666-6-10.199L78 40.4z"
      fill="#00DC82"
    />
  </svg>

  <!-- React.js -->

  <svg
    v-else-if="isSame('React.js')"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#61DAFB" width="25" height="25">
      <path
        d="M23.866 12.448c0-1.474-1.886-2.871-4.776-3.737.667-2.885.37-5.18-.936-5.915a2.065 2.065 0 00-1.038-.254v1.012c.213 0 .385.04.528.118.63.353.904 1.7.69 3.433-.05.426-.134.875-.236 1.334a22.89 22.89 0 00-2.941-.495 22.239 22.239 0 00-1.928-2.268c1.51-1.374 2.928-2.127 3.892-2.127V2.538c-1.274 0-2.942.889-4.628 2.43-1.686-1.532-3.354-2.412-4.628-2.412v1.011c.96 0 2.381.749 3.891 2.114a21.536 21.536 0 00-1.913 2.263 22.053 22.053 0 00-2.946.5 13.426 13.426 0 01-.24-1.316c-.219-1.733.05-3.08.676-3.438.138-.082.32-.118.532-.118V2.56a2.1 2.1 0 00-1.047.254c-1.301.734-1.593 3.025-.922 5.9-2.88.871-4.757 2.264-4.757 3.733 0 1.474 1.885 2.871 4.776 3.737-.667 2.885-.37 5.18.936 5.915.3.172.653.254 1.042.254 1.274 0 2.942-.89 4.628-2.431 1.686 1.533 3.354 2.412 4.627 2.412a2.1 2.1 0 001.047-.254c1.302-.734 1.594-3.025.922-5.9 2.872-.867 4.748-2.264 4.748-3.733zm-6.032-3.025a20.154 20.154 0 01-.625 1.791 24.54 24.54 0 00-1.274-2.15c.658.096 1.292.214 1.9.359zm-2.121 4.83a24.076 24.076 0 01-1.117 1.733 24.64 24.64 0 01-4.178.004 23.454 23.454 0 01-2.085-3.529 24.092 24.092 0 012.075-3.542 24.617 24.617 0 014.179-.004c.384.54.76 1.116 1.12 1.723.353.595.673 1.198.964 1.805a25.182 25.182 0 01-.958 1.81zm1.496-.59c.25.608.463 1.216.639 1.806a21.18 21.18 0 01-1.908.363 25.047 25.047 0 001.269-2.168zm-4.697 4.84c-.431-.436-.862-.92-1.288-1.451.417.018.843.031 1.274.031.435 0 .866-.009 1.287-.031-.417.53-.847 1.015-1.274 1.45zm-3.447-2.671a21.334 21.334 0 01-1.9-.359c.172-.585.385-1.188.626-1.791.19.362.39.725.607 1.088.218.363.44.717.667 1.062zm3.423-9.439c.431.435.862.92 1.288 1.451a29.29 29.29 0 00-1.274-.031c-.435 0-.866.009-1.288.031.417-.53.848-1.016 1.274-1.451zM9.06 9.064a24.949 24.949 0 00-1.269 2.164 19.156 19.156 0 01-.64-1.805c.608-.14 1.247-.263 1.91-.359zm-4.192 5.679c-1.64-.685-2.7-1.583-2.7-2.295s1.06-1.615 2.7-2.295a14.47 14.47 0 011.283-.458c.264.889.612 1.814 1.043 2.762a21.186 21.186 0 00-1.029 2.749c-.458-.141-.894-.295-1.297-.463zm2.492 6.481c-.63-.354-.903-1.7-.69-3.433.051-.427.134-.875.236-1.334.908.218 1.9.386 2.942.495a22.242 22.242 0 001.927 2.267c-1.51 1.375-2.928 2.128-3.891 2.128a1.125 1.125 0 01-.524-.123zm10.988-3.456c.218 1.733-.05 3.08-.676 3.438-.139.082-.32.118-.533.118-.959 0-2.38-.748-3.89-2.114a21.527 21.527 0 001.912-2.263 22.048 22.048 0 002.946-.499c.107.458.19.898.241 1.32zm1.784-3.025a14.44 14.44 0 01-1.283.458 21.491 21.491 0 00-1.043-2.762c.427-.944.77-1.864 1.029-2.749.458.141.894.295 1.301.463 1.64.685 2.701 1.583 2.701 2.295-.005.712-1.065 1.615-2.705 2.295z"
      />
      <path
        d="M12.498 14.52c1.169 0 2.117-.927 2.117-2.072s-.948-2.073-2.117-2.073c-1.17 0-2.117.928-2.117 2.073s.947 2.073 2.117 2.073z"
      />
    </g>
  </svg>

  <!-- Node.js -->
  <svg
    v-else-if="isSame('Node.js')"
    xmlns="http://www.w3.org/2000/svg"
    fill="#6FA660"
    viewBox="0 0 512 512"
  >
    <path
      d="M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z"
    />
    <path
      d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z"
    />
  </svg>

  <!-- PHP -->
  <svg
    v-else-if="isSame('PHP')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#prefix__clip0)" fill="#8B5CF6">
      <path
        d="M2.778 8.054h3.098c.91.01 1.569.354 1.977 1.03.409.677.544 1.6.405 2.772a6.6 6.6 0 01-.358 1.576c-.178.515-.424.98-.74 1.393-.386.526-.798.859-1.237 1-.44.142-.894.212-1.364.212H3.17l-.44 2.879H1.126L2.778 8.054zm1.353 1.727l-.694 4.545c.046.01.093.015.139.015h.162c.74.01 1.356-.086 1.85-.288.493-.212.824-.95.994-2.212.138-1.06 0-1.671-.417-1.833-.408-.161-.92-.237-1.537-.227-.093.01-.181.015-.266.015h-.243l.012-.015M10.088 5.16h1.596l-.451 2.894h1.433c.787.02 1.372.233 1.758.636.393.404.508 1.172.346 2.303l-.774 5.044h-1.619l.74-4.817c.077-.505.054-.863-.07-1.075-.122-.212-.388-.318-.797-.318l-1.283-.016-.948 6.226H8.424l1.664-10.876zM16.484 8.054h3.098c.91.01 1.568.354 1.977 1.03.408.677.543 1.6.404 2.772a6.6 6.6 0 01-.358 1.576c-.177.515-.424.98-.74 1.393-.385.526-.798.859-1.237 1-.44.142-.894.212-1.364.212h-1.387l-.44 2.879H14.83l1.654-10.862zm1.352 1.727l-.693 4.545c.046.01.092.015.138.015h.162c.74.01 1.357-.086 1.85-.288.493-.212.825-.95.994-2.212.139-1.06 0-1.671-.416-1.833-.409-.161-.921-.237-1.538-.227-.092.01-.18.015-.266.015h-.242l.011-.015"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path
          fill="#fff"
          transform="translate(1.125 4.875)"
          d="M0 0h21.813v14.291H0z"
        />
      </clipPath>
    </defs>
  </svg>

  <!-- Sass -->
  <svg
    v-else-if="isSame('Sass')"
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
    fill="#cf649a"
  >
    <path
      d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 00-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 00-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 00-8.33-4.32 13.26 13.26 0 00-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 00-3.2-1.8l-.29-.07a3.21 3.21 0 00-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0018.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0053 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0012.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 005.58 9.22 14.22 14.22 0 0011.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 001 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 00-.01-8.01zm-399.73 25.06l-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 011.78 17.59zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 011.34-.19 1.58 1.58 0 011 .27 1.64 1.64 0 01.19 1.33zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58zm67.37-14.91a14.07 14.07 0 01-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7z"
    />
  </svg>

  <!-- HTML5 -->
  <svg
    v-else-if="isSame('HTML')"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#dd4b25"
  >
    <path
      d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"

      />
  </svg>

  <!-- WordPress -->
  <svg
    v-else-if="isSame('WordPress')"
    xmlns="http://www.w3.org/2000/svg"
    class="prefix__ionicon"
    viewBox="0 0 512 512"
    fill="#3B82F6"
  >
    <path
      d="M259 271.3L226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0049.5 6.5 157 157 0 0024.9-1.8 184.3 184.3 0 0032.5-7.1c2.6-.8 5.2-1.7 7.8-2.6-2.8-6-8.8-19.3-9.1-19.9zM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8 6.9 71.2 52.9 131 116.1 157.9 2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1z"
    />
    <path
      d="M430.2 175.4a188 188 0 00-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 00325.1 77a189.2 189.2 0 00-69.2-13 191.51 191.51 0 00-149.4 71.7A196 196 0 0089 161.3c14.2.1 31.8.1 33.8.1 18.1 0 46-2.2 46-2.2 9.4-.6 10.4 13.1 1.1 14.2 0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8 1-14.2 0 0 28.5 2.2 45.5 2.2 18.1 0 46-2.2 46-2.2 9.3-.6 10.5 13.1 1.1 14.2 0 0-9.3 1.1-19.7 1.6l62.3 185.6 17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7 0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4 0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8 0 17.4-3.3 37.1-13.1 61.8l-39 112.8-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5 56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 001.9-26 191.11 191.11 0 00-17.8-80.8z"
    />
    <path
      d="M256 48a208.06 208.06 0 0181 399.66A208.06 208.06 0 01175 64.34 206.7 206.7 0 01256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32z"
    />
  </svg>

  <!-- Tailwind CSS -->
  <svg
    v-else-if="isSame('Tailwind CSS')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z"
      fill="url(#prefix__paint0_linear)"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1=".667"
        y1="-6.689"
        x2="23.333"
        y2="31.089"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2383AE" />
        <stop offset="1" stop-color="#6DD7B9" />
      </linearGradient>
    </defs>
  </svg>

  <!-- Windi CSS -->
  <svg
    v-else-if="isSame('Windi CSS')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#prefix__prefix__clip0)">
      <path
        d="M12.694 4.687A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966zm0 0A3.97 3.97 0 008.729.72c-2.304 0-3.682 1.728-3.682 3.4h2.266c0-.471.44-1.134 1.416-1.134.938 0 1.7.763 1.7 1.7 0 .937-.684 1.7-2.409 1.7H1.85v2.266h6.17c2.912 0 4.675-1.78 4.675-3.966z"
        fill="url(#prefix__prefix__paint0_linear)"
      />
      <path
        d="M17.722 19.313a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966zm0 0a3.97 3.97 0 01-3.966 3.966c-2.305 0-3.683-1.728-3.683-3.4h2.267c0 .471.44 1.134 1.416 1.134.937 0 1.7-.763 1.7-1.7 0-.937-.862-1.7-2.409-1.7H6.2v-2.266h6.847c2.911 0 4.675 1.78 4.675 3.966z"
        fill="url(#prefix__prefix__paint1_linear)"
      />
      <path
        d="M18.316 4.217c-2.5 0-4.263 1.901-4.263 4.401h2.008c0-1.243.902-2.145 2.255-2.145 1.354 0 2.03.902 2.03 2.145 0 1.243-.878 2.266-3.27 2.266H1.849v2.267h15.565c3.542 0 5.188-2.277 5.188-4.533 0-2.5-1.691-4.4-4.286-4.4z"
        fill="url(#prefix__prefix__paint2_linear)"
      />
      <path
        d="M4.82 15.347H1.849v2.286h2.97v-2.286z"
        fill="url(#prefix__prefix__paint3_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__prefix__paint0_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__paint1_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__paint2_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <linearGradient
        id="prefix__prefix__paint3_linear"
        x1="3.653"
        y1="2.638"
        x2="16.737"
        y2="23.279"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".078" stop-color="#54C8F1" />
        <stop offset=".573" stop-color="#41A2EF" />
        <stop offset="1" stop-color="#3386EE" />
      </linearGradient>
      <clipPath id="prefix__prefix__clip0">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>

  <!-- Figma -->
  <svg
    v-else-if="isSame('Figma')"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.25 19c1.794 0 3.25-1.344 3.25-3v-3H7.25c-1.793 0-3.249 1.344-3.249 3s1.456 3 3.25 3z"
      fill="#0ACF83"
    />
    <path
      d="M4.001 10c0-1.656 1.456-3 3.25-3H10.5v6H7.25c-1.793 0-3.249-1.344-3.249-3z"
      fill="#A259FF"
    />
    <path
      d="M4.002 4c0-1.656 1.455-3 3.249-3h3.25v6H7.25C5.457 7 4 5.656 4 4z"
      fill="#F24E1E"
    />
    <path
      d="M10.5 1h3.25c1.793 0 3.249 1.344 3.249 3s-1.456 3-3.25 3H10.5V1z"
      fill="#FF7262"
    />
    <path
      d="M16.999 10c0 1.656-1.456 3-3.25 3-1.793 0-3.249-1.344-3.249-3s1.456-3 3.25-3c1.793 0 3.249 1.344 3.249 3z"
      fill="#1ABCFE"
    />
  </svg>

  <!-- Firebase -->
  <svg
    v-else-if="isSame('Firebase')"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffc24a"
      d="M5.8 24.6l.17-.237 8.02-15.214.017-.161-3.535-6.64a.656.656 0 00-1.227.207z"
    />
    <path
      fill="#ffa712"
      d="M5.9 24.42l.128-.25 7.937-15.056-3.526-6.666a.6.6 0 00-1.133.206z"
    />
    <path
      fill="#f4bd62"
      d="M16.584 14.01l2.632-2.7-2.633-5.021a.678.678 0 00-1.195 0l-1.407 2.682V9.2z"
    />
    <path
      fill="#ffa50e"
      d="M16.537 13.9l2.559-2.62-2.559-4.88a.589.589 0 00-1.074-.047l-1.414 2.729-.042.139z"
    />
    <path
      fill="#f6820c"
      d="M5.802 24.601l.077-.078.279-.113 10.26-10.222.13-.354-2.559-4.878-8.187 15.645z"
    />
    <path
      fill="#fde068"
      d="M16.912 29.756l9.288-5.179-2.654-16.331a.635.635 0 00-1.075-.346L5.8 24.6l9.233 5.155a1.927 1.927 0 001.878 0"
    />
    <path
      fill="#fcca3f"
      d="M26.115 24.534L23.483 8.326a.557.557 0 00-.967-.353L5.9 24.569l9.131 5.1a1.912 1.912 0 001.863 0z"
    />
    <path
      fill="#eeab37"
      d="M16.912 29.6a1.927 1.927 0 01-1.878 0l-9.158-5.078-.076.078 9.233 5.155a1.927 1.927 0 001.878 0l9.289-5.178-.023-.14z"
    />
  </svg>

  <!-- Linux -->
  <svg
    v-else-if="isSame('Linux')"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M20.581 19.049c-.55-.446-.336-1.431-.907-1.917.553-3.365-.997-6.331-2.845-8.232-1.551-1.595-1.051-3.147-1.051-4.49 0-2.146-.881-4.41-3.55-4.41-2.853 0-3.635 2.38-3.663 3.738-.068 3.262.659 4.11-1.25 6.484-2.246 2.793-2.577 5.579-2.07 7.057a2.924 2.924 0 01-1.155.835c-1.652.72-.441 1.925-.898 2.78a1.57 1.57 0 00-.192.74c0 .75.596 1.399 1.679 1.302 1.461-.13 2.809.905 3.681.905.77 0 1.402-.438 1.696-1.041 1.377-.339 3.077-.296 4.453.059.247.691.917 1.141 1.662 1.141 1.631 0 1.945-1.849 3.816-2.475.674-.225 1.013-.879 1.013-1.488 0-.39-.139-.761-.419-.988zM11.434 8.584c-.319 0-.583-.258-1-.568-.528-.392-1.065-.618-1.059-1.03 0-.283.379-.37.869-.681.526-.333.731-.671 1.249-.671.53 0 .69.268 1.41.579.708.307 1.201.427 1.201.773 0 .355-.741.609-1.158.868-.613.378-.928.73-1.512.73zm1.665-5.215c.882.141.981 1.691.559 2.454l-.355-.145c.184-.543.181-1.437-.435-1.494-.391-.036-.643.48-.697.922a1.686 1.686 0 00-.523-.127c.062-.923.658-1.737 1.451-1.61zM9.696 3.7c.676-.168 1.075.618 1.078 1.435l-.31.19c-.042-.343-.195-.897-.579-.779-.411.128-.344 1.083-.115 1.279l-.306.17c-.42-.707-.419-2.133.232-2.295zM7.581 22.943c-1.963-.893-2.63-.69-3.005-.69-.777 0-1.031-.579-.739-1.127.248-.465.171-.952.11-1.343-.094-.599-.111-.794.478-1.052.815-.346 1.177-.791 1.447-1.124.758-.937 1.523.537 2.15 1.85.407.851 1.208 1.282 1.455 2.225.227.871-.71 1.801-1.896 1.261zm6.987-1.874c-1.384.673-3.147.982-4.466.299-.195-.563-.507-.927-.843-1.293.539-.142.939-.814.46-1.489-.511-.721-1.555-1.224-2.61-2.04-.987-.763-1.299-2.644.045-4.746-.655 1.862-.272 3.578.057 4.069.068-.988.146-2.638 1.496-4.615.681-.998.691-2.316.706-3.14l.62.424c.456.337.838.708 1.386.708.81 0 1.258-.466 1.882-.853.244-.15.613-.302.923-.513.52 2.476 2.674 5.454 2.795 7.15.501-1.032-.142-3.514-.142-3.514.842 1.285.909 2.356.946 3.67.589.241 1.221.869 1.279 1.696l-.245-.028c-.126-.919-2.607-2.269-2.83-.539-1.19.181-.757 2.066-.997 3.288-.11.559-.314 1.001-.462 1.466zm4.846-.041c-.985.38-1.65 1.187-2.107 1.688-.88.966-2.044.503-2.168-.401-.131-.966.36-1.493.572-2.574.193-.987-.023-2.506.431-2.668.295 1.753 2.066 1.016 2.47.538.657 0 .712.222.859.837.092.385.219.709.578 1.09.418.447.29 1.133-.635 1.49zm-8-13.006c-.651 0-1.138-.433-1.534-.769-.203-.171.05-.487.253-.315.387.328.777.675 1.281.675.607 0 1.142-.519 1.867-.805.247-.097.388.285.143.382-.704.277-1.269.832-2.01.832z"
    />
  </svg>

  <!-- WebStax -->
  <svg v-else-if="isSame('webstax')" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" width="940px" height="542px" viewBox="0 0 940 542" enable-background="new 0 0 940 542" xml:space="preserve">
    <image id="image0" width="940" height="542" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6wAAAIeCAQAAAAVR0oFAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
  cwAACxMAAAsTAQCanBgAAAAHdElNRQfmChMRNDZtoR3GAAAa9UlEQVR42u3c245kt7EE0GrB///L
  44dWa3qm68Kq4t7MSK71cGDgGBB3BpnhGsn++HUBAGb5Z/UBAKATxQoAEylWAJhIsQLARIoVACZS
  rAAwkWIFgIkUKwBMpFgBYCLFCgATKVYAmEixAsBEihUAJlKsADCRYgWAiRQrAEykWAFgIsUKABMp
  VgCYSLECwESKFQAmUqwAMJFiBYCJFCsATKRYAWAixQoAEylWAJhIsQLARIoVACZSrAAwkWIFgIkU
  KwBMpFgBYCLFCgATKVYAmEixAsBEihUAJlKsADCRYgWAiRQrAEykWAFgIsUKABMpVgCYSLECwESK
  FQAmUqwAMJFiBYCJFCsATKRYAWAixQoAEylWAJhIsQLARIoVACZSrAAwkWIFgIkUKwBMpFgBYCLF
  CgATKVYAmEixAsBEihUAJlKsADCRYgWAiRQrAEykWAFgIsUKABMpVgCYSLECwESKFQAmUqwAMJFi
  BYCJFCsATKRYAWAixQoAEylWAJhIsQLARIoVACZSrAAwkWIFgIkUKwBMpFgBYCLFCgATKVYAmEix
  AsBEihUAJlKsADCRYgWAiRQrAEykWAFgIsUKABMpVgCYSLECwESKFQAmUqwAMJFiBYCJFCsATKRY
  AWCi/60+AC/79dS/+2P1cXnKc+l+knGS5xOWb4yPV94vS8yNyiOtZvZTlHA1XvA2FGt1xwfkga50
  xgOU8Epe8IYUa1XnB+N5nmnFw5PwmSS8McVazfpAPM4jrc9Xwsdan7B8l1OsddSKwuOcrVa+Ep6v
  VsLyXUixVlA3BI9zhrr5SniOugnLdwnFulbG+D3OV2XkK+HXZSQs35Mp1nXSRu9xPiMtXfk+S8Lc
  pFhXyB26pzkiN18Jj8lNWL6nUKxnyx+4p3lPfr4Svi8/YfkeTrGeqc+wPc1r+uQr4ev6JCzfQynW
  s3QctMf5m3y7kzDDFOsZ+g7Zw7xcOucr4U99E5bvIRTr0foPeO+n2T9fCXe3d76HUKxH2me4ez5N
  +XYnYV6iWI+y32B3e5q7JSzf7nZL+ECK9Rh7jnWfh7lnvhLubp98D6ZY59t7pP2fpny7kzBvUqyz
  GWjvpynf3vlKuHu+p1CsMxnml55PU75feuYr4d+6JnwSxTqPUX7X72HK908S7q1fvidSrHMY4zWd
  nqaEf5Jvd50SPpVincEQb+nxMOV7S498JXxbl4RPpljfZ4T35D9M+d4n4d7y811Asb7LAB9Lfpry
  fUy+3SUnvIRifYfhjUp9mBIeI9/uUhNeRLG+zuiekfcw5fuMvHwl/JzEhJdRrK8yuGdlPUz5Pk/C
  vWXlu9Q/qw8QyqN8XtLMks5aR9LUks5ahZkN84v1FYb2uoT/1Cvf18m3t4R8C1CszzOy91R/mvJ9
  j3y7q55wAf4o+Fme5btqT7D26RLUnmDt02Uww4cU63NcqRnqTrHuyZLUnWLdk2UxxwcU6zNcp1lq
  TrLmqRLVnGTNU2Uyy7sU6zhXaaZ606x3omT1plnvRNnM8w7FOso1mq3WRGudpoNaE611mh7M9CbF
  OsYVOkKdqdY5SSd1plrnJGxBsY7wLI9SY7I1TtFRjcnWOEVHJnuDYn3M5TnS+umuP0FnptubfK9S
  rI+4OEdbO2H5Hm31hFf/9bsz3ysU630uzRnWTVm+Z1g5ZQkfz4x/UKz3uDBnWTNp+Z5l1aQlfA5z
  /otivc1lOZNp97YiX3fqPGb9B8VKFWc/TavgXPJlG4r1Fs/yfGfOXL7nM/POpPuNYr3OJVnjrLnL
  d43z5i7h85n5fxTrNS7IOmbf2zn5ukVrmPu/FCvVHP84Pf+V5Et7ivUnz3K1YxOQ72oS6Eu2l8tF
  sf7kYlRwXAryreDIFCS8lvlfFCtVeZ69HZWve7OeDBTrX1yJOo7IQr51yIK2FOt3nnots/OQby3z
  85BwDdvnoFipbPsH2tzcfN0WilCsv3mWFc1LRb4VSaWnzXNVrF82vwiFSaa3Wfm6J7VsnYdipb4Z
  T3TrZ16cfGlGsX7yLGt7Nx/51iafjjZOVbGSYeNHuoX38nU7KEWxXi6eZYbXU5JvAin1s22minXj
  8ONIqrdX83Uv6to0G8VKklee6aZPO5KsaEGxespZ5NXb8/m6EbVtmc//Vh+AN308/Hd0u9i/Br65
  09c/+tr8L/z7e57Jt4P739st3y18bJ5a6ue/tnpSv/ad70/95lcSTv3Wd74+95ufT3inbw2nWNO8
  f0XzvvmasTkkfuu7CSd+8+tTyPvaHV+wYt1K1sfPvZxZ337NyDyyvnJmwllffo18fXssxZrhmGuZ
  8/3X9fm7j/K9ptM/P7B7wop1Ixkff+yVzJjBLR3+sY+jV07GFK7rkK8XfMYUitm5WBM+/ZzLmDCJ
  W+5NqP53yfeR7Hwl/Jti3UT1Tz/3Ilafxm235lT/i85MuP40bpHvmOrz2KpY9/0fiHAN1/715qme
  5HUfJ0/87L/ePJn5esF/S83xJfv+Yq384eueSOWp3PNzYrW/ZFXCtady27V5Vf4WL/ia6tU/81Mr
  53Cgyp+99vpVnsw9f0+t7nesXi91J3NPTr6rEzaZAvb9o+Ca1v+B3foTvKbyOvlu/XTXn+AVOfmu
  nu/qvz4XxVpLlSdR5RzP+XXjX1dSY7I1TvEs+WadYmt7FmvNZ1npOVQ6y7iauX5Z/1vm+1kS1c63
  0lQr3bXvqic4zZ7FWlG1h1DtPGN+ffu/tVSbZ7XzjKmY7JdqE612nq0o1hoqPoKKZ3qs5uqtOMuK
  Z3rs16VmxhWnWfFMm9jxnwqu98l1H0C9WSWSb3cSHld3VhP5xbpe5YtW+WwpKs+w8tlyVJ5i5bM1
  plhXq37xq5+P98j3XdUnWP18Le1XrLX+aCTh0iecsa7606t/wspM71m1NvBB9itWnmd5vCpjchmn
  5FXyPZ1iXSnnwuectJKcqeWctJaUuaWcsw3Fuk7WZc86Lc+S7/OSZpZ01gZ2K9Y6f76fd9HzTrxW
  2rzSzruaeb2qzhY+zG7FyjusknGJs0o8M6OkeyLFukbqJU89N2PkOypxUolnDqVYeY7HOSJ3Srkn
  hzL2KtYqf7afvbyyT3+G7Alln/4cqTOqcu4qm/gwexVrDVUu985fwD3yvc98eECx8gqr5bYOs+nw
  DVwj2VMo1rN1udhdvoPr5HuLyfCQYuVVFsw1fabS50v4rkauzf8u607F2jzKBWo8UY4iX3jJTsVa
  QbdV1e17+JN8/9ZhIh2+oTjFyns80u/6TaPfF8HhFOuZei6pnl/FF/n+ZhYMUay8z7rpTb7dSPRg
  ipUZPNTLpfMU+n4ZHGCfYvXPBB/L6u1NvszVeiPvU6zrdV9N3b9vd/LtNIFO31KQYmWevR9r/6/v
  /4UwhWJlJqu3N/nCAMXKXFZvb/KFhxTrWfZZSPt86Z52zXfX7+YFipX5rKDe5NuBFA+kWDmCR9ub
  fOEOxcoxdlu9vhf4l2LlKFZvb/KFGxQrx7F6e5MvXKVYOZLV25t84QrFyrGs3t7kCz8oVo5m9fYm
  X/iLYuV4Vm9v8oU/KFbOYPX2Jl/4RrFyDqu3N/nCfxQrZ7F6e5Mv/Euxch6rtzf5wuVyUaycy+rt
  Tb5wUayczertTb6gWDmd1dubfNmeYuV8HVfvr9UHKKRjvvAExcoKVm9v8mVripU1rN7e5FudP2M5
  kGI9i2v8N6u3t275esEMU6ys02318if5sinFykqdVq9fND91yheGKVbWsnp7k29N/mPgoRTreVzl
  66ze3vrk6wUzaJ9i7fO8+5FNb/Llp9a3Yp9ipbIej8wvmlt65AuDFOuZLN7brN7eeuTb5QV3+Y6y
  FCtV9Fi93CJftqFYqSN/9folcE9+vj24pYdTrOdype+zenvLz9cLZsBOxZr/qHeQnpLFe196vszR
  /B7sVKw1WLyPNH9y20vPN/0Fp58/gmKlnuzVa3E9kp0vPKRYz2fxPmb19padb/ILTj57EMVKTcmr
  1/J6LDlfeGCvYq3ymC3eEVXS4hjJ+aa+4CrnTs5+yF7FSpbc51dlgdWWm28mt/I0inUNV3yM1dtb
  br5eMHco1lU8zDGpq1e+Y1LzzUs47bzRdivW3Ge8r9TMLLIxqflmqXQbN0h8t2KtpNJVr22Dh7i1
  1Hy9YG5QrCt5mKMyV698R2Xmm5NwyjnbUKxrufCjMlevfEdl5puRcMIZm9mvWFMfMJnJWWqjMvOt
  r9oN3CLn/Yq1mmrXvrLMJynhUfLd7XRtKdb1XP1xVm9v8t3lZM3tWKz1Hq/rP65eeiMkPEq+vU+V
  me/TdizWiio+gaoyn6aER8m364k2olir8AzGWb29ybfbabbzsen8a3525kJZo2aCj0h4VGa+VRKu
  Or0a0zmBX6yVVH0OFWU+UQmPysy3RsIVzrC5XX+x1r18qQtlhaoZ3ifhUZn5rk248sw2uvl+sVZT
  +WFUk/lQJTwqM9/L5deyjN2tIhRrPR7HuMzVK+FRmfleLmsydq/K2PePgmtfw9yFcr7KOd4m4VGZ
  +X46L+X6U9rqxvvFWlP9Z1JH5oOV8KjMfD+d84fC6/7omRt2/sVafbklL5Sz1U7yFgmPysz3y5E5
  p0xms7uuWCvb7DK+pXqW10l4VGa+383POmkmm930vYu1/tXc7Dq+pXqW10l4VGa+f5qVdtostrvl
  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" />
  </svg>

  <!-- Play Store -->
  <svg
    v-else-if="isSame('PlayStore')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#prefix__prefix__clip0)">
      <path
        d="M16.751 15.057c2.536-1.301 4.458-2.293 4.624-2.37.53-.263 1.078-.96 0-1.502-.348-.17-2.22-1.13-4.624-2.369l-3.331 3.143 3.331 3.098z"
        fill="#FFD900"
      />
      <path
        d="M13.42 11.96L2.812 21.947c.249.03.53-.03.862-.201.695-.356 8.071-4.12 13.077-6.69L13.42 11.96z"
        fill="#F43249"
      />
      <path
        d="M13.42 11.96l3.33-3.13S4.42 2.544 3.674 2.173a1.37 1.37 0 00-.878-.156L13.42 11.96z"
        fill="#00EE76"
      />
      <path
        d="M13.42 11.96L2.796 2.016C2.364 2.11 2 2.467 2 3.194v17.577c0 .666.282 1.146.812 1.192L13.42 11.96z"
        fill="#00D3FF"
      />
    </g>
    <defs>
      <clipPath id="prefix__prefix__clip0">
        <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>

  <!-- App Store -->
  <svg
    v-else-if="isSame('AppStore')"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.818 1h12.364A4.818 4.818 0 0123 5.818v12.364A4.818 4.818 0 0118.182 23H5.818A4.818 4.818 0 011 18.182V5.818A4.818 4.818 0 015.818 1z"
      fill="url(#prefix__paint0_linear)"
    />
    <path
      d="M8.05 16.968h.003L7.3 18.273a.994.994 0 11-1.722-.995l.554-.96.054-.092c.094-.136.329-.372.798-.327 0 0 1.103.12 1.183.693 0 0 .01.188-.116.377zm10.67-3.327h-2.346c-.16-.011-.23-.068-.257-.101l-.002-.003-2.511-4.35-.003.003-.15-.216c-.248-.378-.64.588-.64.588-.467 1.075.067 2.298.253 2.668l3.488 6.04a.994.994 0 101.722-.994l-.872-1.51c-.017-.037-.047-.136.132-.137h1.185a.994.994 0 000-1.989zm-4.557 1.351s.125.637-.359.637H5.133a.994.994 0 010-1.989h2.23c.36-.02.444-.228.444-.228h.002l2.91-5.04a.222.222 0 000-.203l-.96-1.665a.994.994 0 111.722-.994l.445.772.445-.77a.994.994 0 011.723.994l-4.05 7.013c-.017.043-.023.11.109.121h2.42v.024s1.4.022 1.59 1.328z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="prefix__paint0_linear"
        x1="12"
        y1="1"
        x2="12"
        y2="23"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#17C9FB" />
        <stop offset="1" stop-color="#1A74E8" />
      </linearGradient>
    </defs>
  </svg>

  <!-- BitStore -->
  <svg v-else-if="isSame('bitstore')" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" width="124px" height="123px" viewBox="12 -15 100 150" enable-background="new 0 0 124 123" xml:space="preserve">
    <image id="image0" width="124" height="123" x="0" y="0" href="data:image/png;base64,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" />
  </svg>

  <!-- Python -->
  <svg v-else-if="isSame('python')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
    <path
      d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
      fill="#4671a3"
      />
  </svg>

  <!-- Website -->
  <svg v-else-if="isSame('website')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
    <path
      d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
      fill="#4671a3" />
  </svg>

  <!-- Unblock Please -->
  <svg
    v-else-if="isSame('UnblockPlease')"
    viewBox="-4 -3 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H.79v1.342H0V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.227-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H.788v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855l-1.339 2.464Z"
      fill="currentColor"
      />
  </svg>

  <svg v-else-if="isSame('VS Code')" viewBox="-12 -17 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="prefix__a" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M70.912 99.317a6.223 6.223 0 004.96-.19l20.589-9.907A6.25 6.25 0 00100 83.587V16.413a6.25 6.25 0 00-3.54-5.632L75.874.874a6.226 6.226 0 00-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 00-5.318.236l-5.506 5.009a4.168 4.168 0 00-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 00.004 6.162l5.506 5.01a4.162 4.162 0 005.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 002.143 1.4zM75.015 27.3L45.11 50l29.906 22.701V27.3z"
        fill="#fff" />
    </mask>
    <g mask="url(#prefix__a)">
      <path
        d="M96.461 10.796L75.857.876a6.23 6.23 0 00-7.107 1.207l-67.451 61.5a4.167 4.167 0 00.004 6.162l5.51 5.009a4.167 4.167 0 005.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 00-3.539-5.63z"
        fill="#fff" />
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M96.461 89.204l-20.604 9.92a6.229 6.229 0 01-7.107-1.207l-67.451-61.5a4.167 4.167 0 01.004-6.162l5.51-5.009a4.167 4.167 0 015.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 01-3.539 5.63z"
          fill="#fff" />
      </g>
      <g filter="url(#prefix__filter1_d)">
        <path
          d="M75.858 99.126a6.232 6.232 0 01-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 017.108-1.21l20.6 9.908A6.25 6.25 0 01100 16.413v67.174a6.25 6.25 0 01-3.541 5.633l-20.601 9.906z"
          fill="#fff" />
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M70.851 99.317a6.224 6.224 0 004.96-.19L96.4 89.22a6.25 6.25 0 003.54-5.633V16.413a6.25 6.25 0 00-3.54-5.632L75.812.874a6.226 6.226 0 00-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 00-5.317.236l-5.507 5.009a4.168 4.168 0 00-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 00.004 6.162l5.507 5.009a4.162 4.162 0 005.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 002.143 1.4zM74.954 27.3L45.048 50l29.906 22.701V27.3z"
        fill="#fff" opacity=".25" />
    </g>
    <defs>
      <filter id="prefix__filter0_d" x="-8.394" y="15.829" width="116.727" height="92.246" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="4.167" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter id="prefix__filter1_d" x="60.417" y="-8.076" width="47.917" height="116.151" filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="4.167" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient id="prefix__paint0_linear" x1="49.939" y1=".258" x2="49.939" y2="99.742"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#fff" />
        <stop offset="1" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>

  <!-- is-inside.me -->
  <svg
    v-else-if="isSame('discordbot')"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 -3 24 30"
  >
    <path
      d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
      fill="#fff"
      />
  </svg>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  props: {
    brand: {
      type: String,
      required: true,
      default: "",
    },
  },
  methods: {
    /**
     * Checks if passed value matches with the prop value.
     * @prop {string} value
     * @returns {boolean}
     */
    isSame(value: string): boolean {
      return this.brand?.toLowerCase() === value?.toLowerCase()
    },
  },
})
</script>
