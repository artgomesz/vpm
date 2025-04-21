# 🎵 VPM (Virtual Playlist Manager)

O **VPM** (Virtual Playlist Manager) é uma plataforma de recomendação musical que usa emoções para sugerir álbuns aos usuários. A plataforma se conecta com a API do Spotify para recomendar músicas baseadas em sentimentos como "feliz", "triste", "nostálgico", entre outros.


---

## 🚀 Funcionalidades

- 🎯 Seleção de emoções com botões interativos.
- 📀 Recomendação de álbuns baseada em emoções.
- 🎧 Integração com a API do Spotify.

---

## 🛠 Tecnologias Utilizadas

### ⚙️ Back-end

- **Java** com **Spring Boot**
- **OpenFeign** (para requisições HTTP)
- **Spotify Web API**
- **CORS Configuration**

### 🎨 Front-end

- **React** + **TypeScript**
- **Vite** (para desenvolvimento rápido)
- **CSS** puro para estilização

---

## ⚡ Instalação e Execução

### 1️⃣ Back-end

```bash
git clone https://github.com/artgomesz/vpm.git
cd vpm/back-end
./mvnw spring-boot:run
O servidor estará disponível em http://localhost:8080.

2️⃣ Front-end
bash
Copiar
Editar
cd vpm/front-end
npm install
npm run dev
A interface estará disponível em http://localhost:5173.

🧑‍💻 Como Usar
Abra o navegador e acesse http://localhost:5173

Escolha uma das emoções exibidas.

O sistema buscará e mostrará um álbum do Spotify relacionado.

Curta seu momento com a trilha sonora ideal! 🎶
