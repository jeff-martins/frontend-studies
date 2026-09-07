import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
    // 3 - gerenciar os dados do form
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    
    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    // 5 - envio do form
    const handlesubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio);

        // validaçao
        //envio
        // 7 - limpar form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };  

    console.log(name, email);
  return (
    <div>
        {/* 1 - criar o form */}
        {/* 5 - Envio de formulário */}
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name"
                placeholder="Digite seu nome" onChange={handleName}

                // 6 - controlled input
                    value={name || ""}
                />   
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>e-mail</span>
                <input type="text" name="email" placeholder="Digite seu email"
                // 4 - simplificando manipulação
                 onChange={(e) => setEmail(e.target.value) }
                 // 6 - controlled input
                    value={email || ""}
                 />
            </label>  
            {/* 8 - textarea*/}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário"
                 onChange={(e) => setBio(e.target.value)} value={bio}
                 ></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}
                 value={role}>
                    <option value="">Selecione uma função</option>
                    <option value="admin">Administrador</option>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />      
        </form>
    </div>
  )
};

export default MyForm;