import React, { useState, useEffect } from 'react'
import { LoadingOverlay } from '../../aids/style/globalStyle'
import SkillTemp from './SkillTemp'
import { SkillsSection, H1 } from './Styles'
import html from '../../images/skills/html.png'
import css from '../../images/skills/css.png'
import js from '../../images/skills/js.png'
import bootstrap from '../../images/skills/bootstrap.png'
import pug from '../../images/skills/pug.svg'
import sass from '../../images/skills/sass.png'
import react from '../../images/skills/react.png'
import formik from '../../images/skills/formik.png'
import tailwind from '../../images/skills/tailwind.png'
import redux from '../../images/skills/redux.svg'
import styledComp from '../../images/skills/styledComponents.png'
import storybook from '../../images/skills/storybook.png'
import reactTable from '../../images/skills/reactTable.png'
import gulp from '../../images/skills/gulp.png'
import npm from '../../images/skills/npm.png'
import git from '../../images/skills/git.png'
import prettier from '../../images/skills/prettier.png'
import eslint from '../../images/skills/eslint.svg'
import github from '../../images/skills/github.png'
import materialUI from '../../images/skills/material_ui.png'
import materialTable from '../../images/skills/material_table.svg'
import reactFilestack from '../../images/skills/react_filestack.svg'
import vuejs from '../../images/skills/vue.png'
import vuetify from '../../images/skills/vuetify.png'
import nextjs from '../../images/skills/next.png'

function Skills() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])
    return (
        <SkillsSection className='p-8'>

            {
                isLoading && <LoadingOverlay>
                    Loading...
                </LoadingOverlay>
            }
            <div className='container px-6 mx-auto'>
                <div className='text-center mt-12'>
                    <h2 className='text-2xl text-white font-bold'>MY SKILLS</h2>
                </div>



                <H1 className='text-xl text-white col-span-7 font-bold mt-6'>Programming Languages 🌐</H1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7'>
                    <SkillTemp src={html} skillName={'HTML'} opClass='w-12' />
                    <SkillTemp src={css} skillName={'CSS'} opClass='w-12' />
                    <SkillTemp src={js} skillName={'Js'} opClass='w-12' />
                    <SkillTemp src={bootstrap} skillName={'BOOTSTRAP'} />
                    <SkillTemp src={pug} skillName={'PUGJS'} />
                    <SkillTemp src={sass} skillName={'SASS'} />
                    <SkillTemp src={react} skillName={'REACTJS'} opClass='w-12' />
                    <SkillTemp src={formik} skillName={'FORMIK'}  />
                    <SkillTemp src={tailwind} skillName={'TAILWIND'}  />
                    <SkillTemp src={redux} skillName={'REDUX'} opClass='w-12' />
                    <SkillTemp src={storybook} skillName={'STORYBOOK'} opClass='w-12' />
                    <SkillTemp src={reactTable} skillName={'REACT TABLE'} opClass='w-12' />
                    <SkillTemp src={styledComp} skillName={'STYLED-COMPONENTS'} opClass='w-12' opWidth={'col-span-1 lg:col-span-2'} />
                    <SkillTemp src={materialUI} skillName={'MATERIAL UI'} opClass='w-12' />
                    <SkillTemp src={materialTable} skillName={'MATERIAL TABLE'} opClass='w-12' />
                    <SkillTemp src={reactFilestack} skillName={'REACT FILESTACK'} opClass='w-16' />
                    <SkillTemp src={vuejs} skillName={'VUEJS'} opClass='w-12' />
                    <SkillTemp src={vuetify} skillName={'VUETIFY'} opClass='w-12' />
                    <SkillTemp src={nextjs} skillName={'NEXTJS'}  />

                    
                </div>

                <H1 className='text-xl text-white col-span-7 mt-11 font-bold'>Tools 🛠️</H1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7'>
                    <SkillTemp src={gulp} skillName={'GULPJS'} opClass='' />
                    <SkillTemp src={npm} skillName={'NPM'} opClass='w-16' />
                    <SkillTemp src={git} skillName={'GIT'} opClass='w-12' />
                    <SkillTemp src={prettier} skillName={'PRETTIER'} opClass='w-12' />
                    <SkillTemp src={eslint} skillName={'ESLINT'} opClass='w-12' />
                    <SkillTemp src={github} skillName={'GITHUB'} opClass='w-12' />
                </div>


            </div>
        </SkillsSection>
    )
}

export default Skills

