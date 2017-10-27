package com.algaworks.teste.criacao;

import com.algaworks.sessaoHibernate.HibernateUtil;

public class GerarHibernate {

	public static void main(String[] args) {
       HibernateUtil.getSessionFactory();
       HibernateUtil.getSessionFactory().close();
	}

}
