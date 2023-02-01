// export const secret_key = "fe1bddf60bda4f5d728873c8c14741e397bd20b9"
// export const public_key = "eeb02aa91e28f491cc9898855bdb02d4"


export const public_key =process.env.VUE_APP_PUBLIC_KEY
export const secret_key =process.env.VUE_APP_SECRET_KEY

console.log(public_key, secret_key);
