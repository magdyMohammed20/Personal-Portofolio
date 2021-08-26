import React from 'react'
import SkillTemp from './SkillTemp'
import {SkillsSection , H1} from './Styles'
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
function Skills() {
    return (
        <SkillsSection className='p-8'>
            <div className='container px-6'>
                <div className='text-center'>
                    <h2 className='text-3xl text-white font-bold'>MY SKILLS</h2>
                </div>

                
                <div className="grid grid-cols-7">
                    <H1 className='text-2xl text-white col-span-7 font-bold'>Programming Languages 🌐</H1>
                    <SkillTemp src={html} skillName={'HTML'} opClass='w-12'/>
                    <SkillTemp src={css} skillName={'CSS'} opClass='w-12'/>
                    <SkillTemp src={js} skillName={'Js'} opClass='w-12'/>
                    <SkillTemp src={bootstrap} skillName={'BOOTSTRAP'} opClass='w-12'/>
                    <SkillTemp src={pug} skillName={'PUGJS'} opClass='w-12'/>
                    <SkillTemp src={sass} skillName={'SASS'} opClass='w-12'/>
                    <SkillTemp src={react} skillName={'REACTJS'} opClass='w-12'/>
                    <SkillTemp src={formik} skillName={'FORMIK'} opClass='w-12'/>
                    <SkillTemp src={tailwind} skillName={'TAILWIND'} opClass='w-16'/>
                    <SkillTemp src={redux} skillName={'REDUX'} opClass='w-12'/>
                    <SkillTemp src={storybook} skillName={'STORYBOOK'} opClass='w-12'/>
                    <SkillTemp src={reactTable} skillName={'REACT TABLE'} opClass='w-12'/>
                    <SkillTemp src={styledComp} skillName={'STYLED-COMPONENTS'} opClass='w-12' opWidth={'col-span-2'}/>

                    <H1 className='text-2xl text-white col-span-7 mt-6'>Tools 🛠️</H1>
                    <SkillTemp src={gulp} skillName={'GULPJS'} opClass='w-8'/>
                    <SkillTemp src={npm} skillName={'NPM'} opClass='w-16'/>
                    <SkillTemp src={git} skillName={'GIT'} opClass='w-12'/>
                    <SkillTemp src={prettier} skillName={'PRETTIER'} opClass='w-12'/>
                    <SkillTemp src={eslint} skillName={'ESLINT'} opClass='w-12'/>
                    <SkillTemp src={github} skillName={'GITHUB'} opClass='w-12'/>

                </div>
            </div>
        </SkillsSection>
    )
}

export default Skills

