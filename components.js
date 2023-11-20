Vue.component("change-Kitchen", {
  template: `
    
    <div>
   
<p class="blogDetails__mid__content__east__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
    vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
    Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
    randomised words which don't look even slightly believable. Embarrassing hidden in the middle of
    text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
</p>
    <div class="blogDetails__mid__content__east__quotes">
    <h1 class="blogDetails__mid__content__east__quotes__header">“</h1>
    <p class="blogDetails__mid__content__east__quotes__text">The details are not the details. They make
        the design.</p>
</div>
    <h1 class="blogDetails__mid__content__east__header">!Kitchen! Design sprints are great</h1>
    <p class="blogDetails__mid__content__east__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
        vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.</p>
        <ul class="blogDetails__mid__content__east__points">
                    <ol class="blogDetails__mid__content__east__text"> <span
                            class="blogDetails__mid__content__east__points__text">1.</span>Contrary to popular
                        belief.There are many
                        variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</ol>
                    <ol class="blogDetails__mid__content__east__text"><span
                            class="blogDetails__mid__content__east__points__text">2.</span>Contrary to popular
                        belief.There are many
                        variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</ol>
                    <ol class="blogDetails__mid__content__east__text"><span
                            class="blogDetails__mid__content__east__points__text">3.</span>Contrary to popular
                        belief.There are many
                        variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</ol>
                </ul>
                
                <img class="blogDetails__mid__content__east__img" src="img/KitchenImg2.png" alt="photo">
                <p class="blogDetails__mid__content__east__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                    vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                    Lorem Ipsum available, but the majority have suffered.</p>
    </div>
    
    `,
});
Vue.component("change-Bedroom", {
  data() {
    return {
      counter: 0,
    };
  },
  template: `
    <div>
    <h1 class="blogDetails__mid__content__east__header">!Bedroom! Design sprints are great</h1>
    <p class="blogDetails__mid__content__east__text">Dolor sit amet, adipiscing Aliquam eu sem
        vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.</p>
        <div class="blogDetails__mid__content__east__quotes">
        <h1 class="blogDetails__mid__content__east__quotes__header">“</h1>
        <p class="blogDetails__mid__content__east__quotes__text">The details are not the details. They make
            the design.</p>
    </div>
    </div>
    `,
});
Vue.component("change-Building", {
  template: `
    <div>
    <h1 class="blogDetails__mid__content__east__header">!Building! Design sprints are great</h1>
    <p class="blogDetails__mid__content__east__text">Popular belief.There are many variations of passages of
    Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
        vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.</p>
        <ul class="blogDetails__mid__content__east__points">
                    <ol class="blogDetails__mid__content__east__text"> <span
                            class="blogDetails__mid__content__east__points__text">1.</span>Contrary to popular
                        belief.There are many
                        variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</ol>
                    <ol class="blogDetails__mid__content__east__text"><span
                            class="blogDetails__mid__content__east__points__text">2.</span>Contrary to popular
                        belief.There are many
                        variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</ol>

                </ul>
    </div>
    `,
});

Vue.component("change-Architecture", {
  template: `
    <div>
    <h1 class="blogDetails__mid__content__east__header">!Architecture! Design sprints are great</h1>
    <p class="blogDetails__mid__content__east__text">Contrary to popular belief.There are many variations of passages of
    Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
        vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.</p>
    </div>
    `,
});
Vue.component("change-Kitchen-Planning", {
  template: `
    <div>
    <h1 class="blogDetails__mid__content__east__header">!Kitchen Planning! Design sprints are great</h1>
    <p class="blogDetails__mid__content__east__text">There are many variations of passages of
    Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
        vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.</p>
        <ul class="blogDetails__mid__content__east__points">
                    <ol class="blogDetails__mid__content__east__text"> <span
                            class="blogDetails__mid__content__east__points__text">1.</span>Contrary to popular
                        belief.There are many
                        variations of passages of Lorem Ipsum available, but
                        the majority have suffered.</ol>
            
                </ul>
    </div>
    `,
});
Vue.component("change-none", {
  template: `
    <div>
    <change-Kitchen>  
    </change-Kitchen>
    <change-Bedroom>  
    </change-Bedroom>
    <change-Building>  
    </change-Building>
    <change-Architecture>  
    </change-Architecture>
    <change-Kitchen-Planning>  
    </change-Kitchen-Planning>
    </div>
    `,
});
